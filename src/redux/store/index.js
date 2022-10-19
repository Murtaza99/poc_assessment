import {applyMiddleware, createStore} from 'redux';
import { createLogger } from 'redux-logger'
import { Products } from '../reducer/Products';

const logger = createLogger({collapsed:true})
export const store = createStore(Products,applyMiddleware(logger));