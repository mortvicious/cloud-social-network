#!/usr/bin/env node

import './loaders/.env'
import {App} from "./App";

App.ServerStart()
App.ConfigureServer()
App.ConfigureRoutes()



