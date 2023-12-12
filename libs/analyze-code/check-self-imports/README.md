# Check self-imports

Проверяет наличие "кольцевых" импортов/экспортов внутри основных разделов приложения.

> Внутри каждой директории основного раздела - все импорты/экспорты во внутренних файлах должны быть относительными.

Пример условного сервиса `Service/Demo`:

```ts
// src/Services/Demo/index.ts
export * from './types';
export * from './inner-folder/some-file';

// src/Services/Demo/types.ts
export type DemoType = 'lorem' | 'ipsum';

// src/Services/Demo/inner-folder/some-file.ts
import { DemoType } from '../types'; // ✓ правильно
import { DemeType } from 'Service/Demo'; // ✕ не правильно
```

Вот такую авто-подстановку `import { DemeType } from 'Service/Demo';` - как правило, будет делать ваш редактор или IDE,
в зависимости от ваших настроек. Следить за этим не всегда получается, поэтому данный скрипт будет автоматически искать и уведомлять о таких записях.
