module.exports = {
  apps: [{
    name: 'water-management',
    script: 'npm',
    args: 'start',
    cwd: '/root/water-management',
    env: {
      NODE_ENV: 'production',
      NEXT_SERVER_ACTIONS_ENCRYPTION_KEY: 'DAbPuET+N5CKbrxW6QPJchrXJ/DjxA8lIHZGD0w8+pQ=',
      // Add your other env vars here too (FROM_EMAIL, TENANT_ID, etc.)
    }
  }]
};