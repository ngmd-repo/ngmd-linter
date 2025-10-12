module.exports = [
  {
    files: ['*.db.ts'],
    rules: {
      '@typescript-eslint/typedef': [
        'warn',
        {
          memberVariableDeclaration: true,
          variableDeclaration: false,
          parameter: true,
          propertyDeclaration: true,
        },
      ],
    },
  },

  {
    files: ['*.manager.ts'],
    rules: {
      '@angular-eslint/component-class-suffix': 'off',
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
      '@angular-eslint/use-component-selector': 'off',
    },
  },
];
