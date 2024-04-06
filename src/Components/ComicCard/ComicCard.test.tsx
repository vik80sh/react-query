import { getByTestId, render } from '@testing-library/react';
import { useQuery } from 'react-query'; 
const mockData = {
    "data": {
        "offset": 0,
        "total": 59731,
        "results": [
            {
                "id": 82967,
                "title": "Marvel Previews",
                "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                    "extension": "jpg"
             },
            },
        ]
    }
}
jest.mock('react-query', () => ({
  useQuery: jest.fn(),
}));

import ComicCard from './ComicCard';

describe('YourComponent', () => {
  beforeEach(() => {
    (useQuery as jest.Mock).mockReset();
  });

  test('renders data', () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockData,
    });

   const {getByTestId} =  render(<ComicCard />);
   let cardTitleElement = getByTestId("card-title")
   expect(cardTitleElement).toBeTruthy();
   expect(cardTitleElement.textContent).toBe(mockData.data.results[0].title);
  });
});
