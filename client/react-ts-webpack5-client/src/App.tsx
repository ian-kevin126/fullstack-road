import React, { Suspense } from 'react';
import routes from '@/routes';
import { useRoutes } from 'react-router-dom';
import SuspendFallbackLoading from '@/components/suspenseFallback';

const App: React.FC = () => {
  const element = useRoutes(routes);
  return (
    <Suspense
      fallback={
        <SuspendFallbackLoading
          message="Alert message title"
          description="Further details about the context of this alert."
        />
      }
    >
      <>{element}</>
    </Suspense>
  );
};

export default App;
