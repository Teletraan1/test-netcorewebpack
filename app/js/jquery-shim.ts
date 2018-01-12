//When you want to use jQuery’s $ variable inside other bundles, tell TypeScript about the reference with:
// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
//https://medium.com/redpoint/using-webpack-and-typescript-with-asp-net-core-2-2b2d7f6b7f16
import * as $ from 'jquery';
(window as any).jQuery = (window as any).$ = $;