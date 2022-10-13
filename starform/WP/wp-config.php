<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'starform' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~#2kBWlzI{UDBeaO(X{;[XS,pEo`h`x;NnxLpi:&a9/[OU(VlWL$p:&.z|?U,lK^' );
define( 'SECURE_AUTH_KEY',  '}Y8O4A_^|O;V$n6ti:e7:z`Wj,Z{!(c.4Dv1S3j_o>/mhyu](f+{Y<twEeeN$1sN' );
define( 'LOGGED_IN_KEY',    'x]3PuSJ-/AF9t,kEozB7dnyr3RrQL6@=$(LL@Szic,BR8$-7L:@_kAF0>P?D1=Zu' );
define( 'NONCE_KEY',        'Yadz*ft-h^(:!OncvXtkP/=>#7hYk>!k=[6an7EjuJ[4%^TT1@zm9;F?qFqL&vl>' );
define( 'AUTH_SALT',        'A.e*|@/CN~|u0q~]IRzyrT=dJv#J^zPs)F&(g`_`^)D}L183sxQ`G)aDgZU7Q}4[' );
define( 'SECURE_AUTH_SALT', ')qrDR[R_aP|@,eq:SIg*x|S`c:Dyy;?]0x d&8 PXR!TR1+Xq+kg_q;Q=^>YHEB@' );
define( 'LOGGED_IN_SALT',   'ZW9P=fr#_9z9-S`dsx{R$Z5C9=}Z:kN=p4y6P+8yX$BfA=HpXSq`*)xe<r?,~8~1' );
define( 'NONCE_SALT',       'GrzZrQ%Koa:U}IAlD~HYwNX2.kk]{7&:zD{]MD_bD,u]OvcQd,.-k+P8mP.zhrvJ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
