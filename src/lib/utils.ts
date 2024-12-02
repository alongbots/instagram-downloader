import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Change cors limit resource to none cors resource
 * @param url
 */
export function toCorsUrl(url: string): string {
  const p = url.split('/')
  let t = ''
  for (let i = 0; i < p.length; i++) {
    if (i == 2) {
      t +=
        p[i].replaceAll('-', '--').replaceAll('.', '-') +
        atob('LnRyYW5zbGF0ZS5nb29n') +
        '/'
    } else {
      if (i != p.length - 1) {
        t += p[i] + '/'
      } else {
        t += p[i]
      }
    }
  }
  return encodeURI(t)
}

export function isValidIgUrl(url: any) {
  if (typeof url !== 'string') {
    return false
  }
  return /^(https?:\/\/)?(www\.)?instagram\.com\/(p|reel|tv)\/[a-zA-Z0-9_\-]+(\/(\?[^#]*)?)?(#.*)?$/.test(
    url
  )
}
