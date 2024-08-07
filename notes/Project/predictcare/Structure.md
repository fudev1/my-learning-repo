
```md
predictcare/
├── backend/
│   ├── core/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   ├── users/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   ├── views.py
│   │   └── migrations/
│   ├── health/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   ├── views.py
│   │   └── migrations/
│   ├── ports/
│   │   ├── __init__.py
│   │   ├── repositories.py
│   │   ├── services.py
│   ├── adapters/
│   │   ├── __init__.py
│   │   ├── db/
│   │   │   ├── __init__.py
│   │   │   ├── user_repository.py
│   │   │   ├── health_repository.py
│   │   ├── api/
│   │       ├── __init__.py
│   │       ├── user_api.py
│   │       ├── health_api.py
│   ├── manage.py
│   └── .env
└── frontend/
    ├── public/
    │   ├── index.html
    │   └── ...
    ├── src/
    │   ├── assets/
    │   │   └── images/
    │   ├── components/
    │   │   ├── common/
    │   │   │   ├── Header.tsx
    │   │   │   ├── Footer.tsx
    │   │   └── specific/
    │   │       ├── UserCard.tsx
    │   │       ├── HealthChart.tsx
    │   ├── pages/
    │   │   ├── HomePage.tsx
    │   │   ├── LoginPage.tsx
    │   │   ├── UserProfilePage.tsx
    │   │   ├── PatientListPage.tsx
    │   │   ├── LungAnalysisPage.tsx
    │   │   ├── HeartAnalysisPage.tsx
    │   ├── services/
    │   │   ├── api.ts
    │   │   ├── authService.ts
    │   │   ├── userService.ts
    │   ├── store/
    │   │   ├── store.ts
    │   │   ├── userSlice.ts
    │   │   ├── healthSlice.ts
    │   ├── styles/
    │   │   ├── theme.ts
    │   │   ├── GlobalStyles.ts
    │   ├── utils/
    │   │   ├── validators.ts
    │   │   ├── formatters.ts
    │   ├── App.tsx
    │   ├── index.tsx
    │   └── interfaces/
    │       ├── User.ts
    │       ├── Health.ts
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── .env

```

