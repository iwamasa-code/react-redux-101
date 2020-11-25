import { combineReducers } from "redux";
import count from "./count";

export default combineReducers({ count });

//通常のアプリケーションではReducerを複数持つ。複数持つ場合は以下のように書く。
//export default combineReducers({ foo, bar, hoge })
