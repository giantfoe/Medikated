export const theme = {
  colors: {
    // Primary colors
    primary: '#635bff',
    primaryGradient: ['#635bff', '#6c47ff'],
    
    // Neutral colors
    background: '#ffffff',
    backgroundSecondary: '#f6f9fc',
    
    // Text colors
    textPrimary: '#24292e',
    textSecondary: '#657789',
    textLight: '#ffffff',
    
    // Utility colors
    divider: '#e5e8eb',
    shadow: '#000000',
    
    // Dark mode colors (for future use)
    darkBackground: '#0a2540',
    darkBackgroundSecondary: '#1b1f24',
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  
  borderRadius: {
    sm: 6,
    md: 12,
    lg: 24,
    full: 9999,
  },
  
  typography: {
    heading: {
      fontSize: 24,
      fontWeight: '600',
    },
    subheading: {
      fontSize: 18,
      fontWeight: '600',
    },
    body: {
      fontSize: 16,
      fontWeight: '400',
    },
    caption: {
      fontSize: 14,
      fontWeight: '400',
    },
  },
  
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },
  },
}; 