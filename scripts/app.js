import notes from './data';
import Notification from './notification';

const unreadClass = 'notes_text-unread';

const badgeUpdate = () => {
    document.querySelector('.head-bar_badge').textContent = document.querySelectorAll(`.${unreadClass}`).length;
};

const markAsRead = (event) => {
    event.target.classList.remove(unreadClass);
    badgeUpdate();
    event.target.removeEventListener('mouseenter', markAsRead);
};

const markAllAsRead = () => {
    document.querySelectorAll(`.${unreadClass}`).forEach(elem => {
        elem.classList.remove(unreadClass);
    });
    badgeUpdate();
};

notes.forEach((note) => {
    const notification = new Notification(note.name, note.avatar, note.text, note.date, note.attachment, note.isRead);

    const noteItem =  notification.create();

    if (!note.isRead) {
        noteItem.addEventListener('mouseenter', markAsRead);
    };

    document.querySelector('.notes').append(noteItem);
});

document.querySelector('.head-bar_button').addEventListener('click', markAllAsRead);

badgeUpdate();