
**Type : @types/Btn.tsx**

```tsx
export type BtnType = {
  value: string;
  severity: "danger" | "success";
};
```


**Component : @components/Btn.tsx**

```tsx
import { BtnType } from "../types/Btn";

const Btn = (props: BtnType) => {
  const colorClasses = {
    danger: "bg-red-500",
    success: "bg-green-500",
  };

  return (
    <div className="border border-slate-500 rounded p-4 my-2">
      <button
        type="button"
        className={`rounded p-2 ${colorClasses[props.severity]}`}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Btn;
```

**Utilisation du component**

```tsx
<Btn value="Bien joué !" severity="success" />
<Btn value="Echec" severity="danger" />
```