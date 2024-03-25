// https://github.com/alextheme/gulp_for_wp/tree/main

import gulp from 'gulp'
import browserSync from "browser-sync"
const { watch, series } = gulp

export const watchForChanges = () => {
    watch("**/*.*", reload)
}

const server = browserSync.create()

export const serve = done => {
    server.init({
        proxy: 'http://localhost/wp03/form-auto/' // put your local website link here
    })
    done()
}

export const reload = done => {
    setTimeout(() => {
        server.reload()
        done()
    }, 500)
}

export default series(serve, watchForChanges)

