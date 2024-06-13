const notifications = [
    {
        avatar: 'avatar-mark-webber.webp',
        name: 'Mark Webber',
        text: 'reacted to your recent post',
        date: '1m ago',
        attachment: {
            type: 'post',
            content: 'My first tournament today!',
        },
        isRead: false,
    },
    {
        avatar: 'avatar-angela-gray.webp',
        name: 'Angela Gray',
        text: 'followed you',
        date: '5m ago',
        attachment: {
            type: null,
            content: null,
        },
        isRead: false,
    },
    {
        avatar: 'avatar-jacob-thompson.webp',
        name: 'Jacob Thompson',
        text: 'has joined your group',
        date: '1 day ago',
        attachment: {
            type: 'group',
            content: 'Chess Club',
        },
        isRead: false,
    },
    {
        avatar: 'avatar-rizky-hasanuddin.webp',
        name: 'Rizky Hasanuddin',
        text: 'sent you a private message',
        date: '5 days ago',
        attachment: {
            type: 'message',
            content: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        },
        isRead: true,
    },
    {
        avatar: 'avatar-kimberly-smith.webp',
        name: 'Kimberly Smith',
        text: 'commented on your picture',
        date: '1 week ago',
        attachment: {
            type: 'picture',
            content: 'image-chess.webp',
        },
        isRead: true,
    },
    {
        avatar: 'avatar-nathan-peterson.webp',
        name: 'Nathan Peterson',
        text: 'reacted to your recent post',
        date: '2 weeks ago',
        attachment: {
            type: 'post',
            content: '5 end-game strategies to increase your win rate',
        },
        isRead: true,
    },
    {
        avatar: 'avatar-anna-kim.webp',
        name: 'Anna Kim',
        text: 'left the group',
        date: '2 weeks ago',
        attachment: {
            type: 'group',
            content: 'Chess Club',
        },
        isRead: true,
    },
];

export default notifications;