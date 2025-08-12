import { defineConfig } from "@ice/app";
import request from "@ice/plugin-request";
import store from "@ice/plugin-store";
import auth from "@ice/plugin-auth";
import antd from '@ice/plugin-antd';
import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';

// The project config, see https://v3.ice.work/docs/guide/basic/config
export default defineConfig(() => ({
  ssr: false,
  ssg: false,
  hash: "contenthash",
  routes: {
    defineRoutes: (route) => {
      // route("*", "404.tsx");
    },
  },
  proxy: {
    "/api": {
      target: "http://demo.higress.io/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
  plugins: [
    request(),
    store(),
    auth(),
    antd({
      theme: {
        token: {
          colorPrimary: '#1A2B4C',
          borderRadius: 8,
          wireframe: false,
          colorTextHeading: '#0B1A2B',
        },
      },
    }),
  ],
  webpack: (config) => {
    config.plugins = config.plugins || [];
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'node_modules/monaco-editor/min/vs'),
            to: 'vs',
          },
        ],
      }),
    );
    return config;
  },
}));
