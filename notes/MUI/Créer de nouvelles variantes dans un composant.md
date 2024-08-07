**Source :**
https://mui.com/material-ui/customization/theme-components/

On peut utiliser la clé `variants` dans la section `components` du thème pour créer de nouvelles variantes et faire passer des props dans les nouveaux composants.

```jsx

const theme = createTheme({
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'dashed' },
					style: {
						textTransform: 'none',
						border: `2px dashed ${blue[500]}`
					},
				},
				{
					props: { variant: 'dashed', color: 'secondary'},
					style: {
						border: `4px dashed ${red[500]}`
					},
				},
			],
		},
	},
});
```

Si on utilise *typescript* il faudra spécifier les nouvelles variantes/couleurs en utilisant : https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation

```tsx
declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		dashed: true;
	}
}
```

**Utilisation :**

```tsx
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

const defaultTheme = createTheme();

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${defaultTheme.palette.primary.main}`,
            color: defaultTheme.palette.primary.main,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `2px dashed ${defaultTheme.palette.secondary.main}`,
            color: defaultTheme.palette.secondary.main,
          },
        },
        {
          props: { variant: 'dashed', size: 'large' },
          style: {
            borderWidth: 4,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary', size: 'large' },
          style: {
            fontSize: 18,
          },
        },
      ],
    },
  },
});

export default function GlobalThemeVariants() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="dashed" sx={{ m: 1 }}>
        Dashed
      </Button>
      <Button variant="dashed" color="secondary" sx={{ m: 1 }}>
        Secondary
      </Button>
      <Button variant="dashed" size="large" sx={{ m: 1 }}>
        Large
      </Button>
      <Button variant="dashed" color="secondary" size="large" sx={{ m: 1 }}>
        Secondary large
      </Button>
    </ThemeProvider>
  );
}
```