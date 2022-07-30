import React from 'react';
import { render, screen } from '@testing-library/react';
import PageContainer from './PageContainer';

describe('PageContainer', () => {
  it('renders lazy loaded page', () => {
    const page = render(<PageContainer><h1>Page Content</h1></PageContainer>);
    const pageContent = page.getByText('Page Content');
    expect(pageContent).toBeInTheDocument();
  });
});
