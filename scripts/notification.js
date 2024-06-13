class Notification {
    constructor (name, avatar, text, date, attachment, isRead) {
        this.name = name;
        this.avatar = avatar;
        this.text = text;
        this.date = date;
        this.attachment = attachment;
        this.isRead = isRead;
    };

    create() {

        /* Creating elements */

        const notesItem = document.createElement('li');
        const notesImg = document.createElement('img');
        const notesText = document.createElement('div');

        const text = document.createElement('p');
        const textDate = document.createElement('p');

        const textName = document.createElement('a');
        const textMain = document.createElement('span');

        /* Add classes */

        notesItem.classList.add('notes_item');
        notesImg.classList.add('notes_img');
        notesText.classList.add('notes_text');

        text.classList.add('text');

        textMain.classList.add('text-main');

        textDate.classList.add('text-date');

        textName.classList.add('notes_link');
        textName.classList.add('notes_link-name');

        /* Add content */

        textName.textContent = this.name;
        textMain.textContent = this.text;

        textName.href = '#';

        notesImg.src = `./assets/images/${this.avatar}`;
        notesImg.alt = `Avatar of ${this.name}`;

        text.append(textName);
        text.append(textMain);

        notesText.append(text);

        notesItem.append(notesImg);
        notesItem.append(notesText);

        if (this.attachment.type) {
            switch (this.attachment.type) {

                case ('post'):
                case ('group'):
                    const textPost = document.createElement('a');

                    textPost.classList.add('notes_link');
                    textPost.classList.add('notes_link-endtext');

                    textPost.textContent = this.attachment.content;
                    textPost.href = '#';

                    text.append(textPost);
                    break;

                case ('message'):
                    const textMessage = document.createElement('a');

                    textMessage.classList.add('text');
                    textMessage.classList.add('notes_text-message');

                    textMessage.textContent = this.attachment.content;
                    textMessage.href = '#';

                    notesText.append(textMessage);
                    break;
                
                case ('picture'):
                    const imgLink = document.createElement('a');
                    const img = document.createElement('img');

                    imgLink.classList.add('notes_link');
                    img.classList.add('notes_img');

                    imgLink.href = '#';
                    img.src = `./assets/images/${this.attachment.content}`;

                    imgLink.append(img);

                    notesItem.append(imgLink);
            };
        };

        if (!this.isRead) {
            notesItem.classList.add('notes_text-unread');
        };

        return notesItem;
    };
};

export default Notification;