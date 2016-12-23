#!/bin/bash
set -e

supervisord -c /etc/supervisor/supervisord.conf
php-fpm

exec "$@"
