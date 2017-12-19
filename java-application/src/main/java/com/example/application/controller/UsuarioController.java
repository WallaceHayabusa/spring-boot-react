package com.example.application.controller;

import com.example.application.model.Usuario;
import com.example.application.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/rest")
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    @GetMapping("/usuarios")
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    @PostMapping("/usuarios")
    public Usuario createUsuario(@Valid @RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable(value = "id") Long usuarioId) {
        Usuario usuario = usuarioRepository.findOne(usuarioId);

        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(usuario);
    }

    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> updateUsuario(@Valid @RequestBody Usuario usuarioNovo, @PathVariable(value = "id") Long usuarioId) {
        Usuario usuario = usuarioRepository.findOne(usuarioId);

        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }

        usuario.setName(usuarioNovo.getName());
        usuario.setEmail(usuarioNovo.getEmail());

        Usuario usuarioAtualizado = usuarioRepository.save(usuario);

        return ResponseEntity.ok().body(usuarioAtualizado);
    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> deleteUsuario(@PathVariable(value = "id") Long usuarioId) {
        Usuario usuario = usuarioRepository.findOne(usuarioId);

        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }

        usuarioRepository.delete(usuarioId);

        return ResponseEntity.ok().build();
    }

}
