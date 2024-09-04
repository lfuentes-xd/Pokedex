import StackNavigator from './Presentation/Navigator/StackNavigator'
import { ThemeContextProvider } from './Presentation/Context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}> 
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  )
}