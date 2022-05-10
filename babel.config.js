module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-export-namespace-from'],
    [
        "module:react-native-dotenv",
        {
            moduleName: "@env",
            path: ".env",
        },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json']
      }
    ]
],
};
