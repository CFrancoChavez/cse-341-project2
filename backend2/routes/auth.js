const express = require('express');
const passport = require('../config/passport');
const router = express.Router();

/**
 * @swagger
 * /auth/github:
 * get:
 * tags:
 * - Authentication
 * summary: Inicia la autenticación con GitHub
 * description: Redirige al usuario a la página de inicio de sesión de GitHub.
 */
router.get('/github', passport.authenticate('github'));

/**
 * @swagger
 * /auth/github/callback:
 * get:
 * tags:
 * - Authentication
 * summary: Callback de GitHub después de la autorización
 * description: Maneja la respuesta de GitHub y autentica al usuario.
 * responses:
 * 302:
 * description: Redirección después de la autenticación (éxito o fallo).
 */
router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }), // Puedes cambiar '/login'
    (req, res) => {
        res.redirect('/protected'); // Cambia '/protected' por la ruta deseada
    });

/**
 * @swagger
 * /auth/logout:
 * get:
 * tags:
 * - Authentication
 * summary: Cierra la sesión del usuario
 * description: Elimina la sesión del usuario.
 * responses:
 * 302:
 * description: Redirección después del cierre de sesión.
 */
router.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/'); // Cambia '/' por la ruta deseada después del logout
    });
});

module.exports = router;