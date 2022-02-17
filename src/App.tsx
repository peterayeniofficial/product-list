import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductLists from './product-lists/ProductLists';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductLists />
    </QueryClientProvider>
  );
}

export default App;
