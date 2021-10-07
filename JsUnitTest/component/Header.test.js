import  App from  "../../App"
import React from 'react';

import { render, screen} from '@testing-library/react';

test('renders learn react link', () => {

    render(<App />);
  
    const linkElement1 = screen.getByText(/TodoApp/i);
  
    expect(linkElement1).toBeInTheDocument();
  
    const linkElement2 = screen.getByText(/SelectorApp/i);
  
    expect(linkElement2).toBeInTheDocument();
  
  });