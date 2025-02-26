const dummyEmployees = [
    {
        id: '1',
        name: 'John Doe',
        profile_image: 'https://example.com/images/john.jpg',
        username: 'john_doe',
        email: 'john.doe@example.com',
        dob: '1990-01-01',
        password: 'password123',
        address: {
            present: '123 Main St, Springfield, IL',
            permanent: '456 Oak St, Springfield, IL',
            city: 'Springfield',
            country: 'USA',
            postal_code: '62701',
        },
        cards: [
            {
                id: 'card1',
                card_number: '4111 1111 1111 1111',
                expiry_date: '12/25',
                card_type: 'Visa',
                balance: 2500.00,
                transactions: [
                    {
                        id: 'txn1',
                        date: '2025-01-15',
                        amount: 150.00,
                        description: 'Amazon Purchase',
                        type: 'Debit',
                    },
                    {
                        id: 'txn2',
                        date: '2025-01-18',
                        amount: 45.50,
                        description: 'Starbucks',
                        type: 'Debit',
                    },
                ],
            },
        ],
    },
    {
        id: '2',
        name: 'Jane Smith',
        profile_image: 'https://example.com/images/jane.jpg',
        username: 'jane_smith',
        email: 'jane.smith@example.com',
        dob: '1985-05-15',
        password: 'password456',
        address: {
            present: '789 Pine St, Springfield, IL',
            permanent: '101 Maple St, Springfield, IL',
            city: 'Springfield',
            country: 'USA',
            postal_code: '62702',
        },
        cards: [
            {
                id: 'card2',
                card_number: '4222 2222 2222 2222',
                expiry_date: '03/26',
                card_type: 'Mastercard',
                balance: 3200.00,
                transactions: [
                    {
                        id: 'txn3',
                        date: '2025-01-10',
                        amount: 210.75,
                        description: 'Walmart Shopping',
                        type: 'Debit',
                    },
                    {
                        id: 'txn4',
                        date: '2025-01-12',
                        amount: 60.00,
                        description: 'Groceries',
                        type: 'Debit',
                    },
                ],
            },
        ],
    },
    {
        id: '3',
        name: 'Alice Johnson',
        profile_image: 'https://example.com/images/alice.jpg',
        username: 'alice_johnson',
        email: 'alice.johnson@example.com',
        dob: '1992-07-20',
        password: 'password789',
        address: {
            present: '654 Elm St, Springfield, IL',
            permanent: '321 Birch St, Springfield, IL',
            city: 'Springfield',
            country: 'USA',
            postal_code: '62703',
        },
        cards: [
            {
                id: 'card3',
                card_number: '4333 3333 3333 3333',
                expiry_date: '07/27',
                card_type: 'American Express',
                balance: 1800.00,
                transactions: [
                    {
                        id: 'txn5',
                        date: '2025-01-20',
                        amount: 500.00,
                        description: 'Flight Booking',
                        type: 'Debit',
                    },
                    {
                        id: 'txn6',
                        date: '2025-01-22',
                        amount: 120.00,
                        description: 'Restaurant Bill',
                        type: 'Debit',
                    },
                ],
            },
        ],
    },
];

export default dummyEmployees;
