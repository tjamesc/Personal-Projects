import { useEffect, useState } from 'react'
import axios from 'axios'

export default function UseAuth(code) {
    const [accessToken, setAccessToken] = useState(null)
    const [refreshToken, setRefreshToken] = useState(null)
    const [expiresIn, setExpiresIn] = useState(null)

    useEffect(() => {
        axios.post('http://localhost:3001/login', { code }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, '/')
        }).catch(err => {
            console.log(err)
        })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios.post('http://localhost:3001/refresh', { refreshToken }).then(res => {
            setAccessToken(res.data.accessToken)
            setExpiresIn(res.data.expiresIn)
            }).catch(err => {
                console.log(err)
            })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    return accessToken
}