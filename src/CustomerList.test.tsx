import { render, screen, act } from "@testing-library/react"

import { CustomerList } from './CustomerList';
describe('Customer List', () => {
      it("should render list of customers", async () => {
        const filteredUser = [
          { name: 'John Doe', email:'john@gmail.com', id:'0482', role:'MANAGER' },
          { name: 'Jane Smith', email:'smith@gmail.com', id:'0482', role:'MANAGER'},
        ];
        const userType = 'Admin';
        act(() => {
          render(<CustomerList filteredUser={filteredUser} userType={userType} />);
        });
        const items = screen.getAllByRole("listitem")
        // screen.debug();
        expect(items.length).toBe(filteredUser.length)
      });
});