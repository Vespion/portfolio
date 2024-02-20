import type { Alpine } from 'alpinejs'
// @ts-ignore
import Toolkit from '@alpine-collective/toolkit'

export default (Alpine: Alpine) => {
    Alpine.plugin(Toolkit)
}