export type ThemePreference = 'light' | 'dark'

export const DEFAULT_THEME: ThemePreference = 'light'
export const THEME_STORAGE_KEY = 'typstation-theme'

export function resolveThemePreference(
  value: string | null | undefined,
): ThemePreference {
  return value === 'dark' ? 'dark' : DEFAULT_THEME
}

export function readStoredThemePreference(): ThemePreference {
  if (typeof window === 'undefined') {
    return DEFAULT_THEME
  }

  try {
    return resolveThemePreference(window.localStorage.getItem(THEME_STORAGE_KEY))
  } catch {
    return DEFAULT_THEME
  }
}

export function persistThemePreference(theme: ThemePreference) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Ignore storage write failures and keep the in-memory theme.
  }
}

export function applyThemePreference(theme: ThemePreference) {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.dataset.theme = theme
}
