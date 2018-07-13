import { User } from './user';
import { Book } from './book';
export class Order {
    _user: USERORDER = new USERORDER();
    // email?: string = new User().email;
    books: BOOK[] = new Array<BOOK>();
    total: number;
    note: string;
}

export class BOOK {
    _book: string = new Book()._id;
    quantity: number;
    price: number;
}

export class USERORDER {
    _id: string;
    email: string;
}