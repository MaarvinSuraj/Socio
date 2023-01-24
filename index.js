// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// =============== SIDEBAR ====================


// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


// ====================== MESSAGES ======================

//searches Chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }
        else{
            user.style.display = 'none';
        }
    })
}

// search chat
messageSearch.addEventListener('keyup',searchMessage);


// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener("click",() => {
    messages.style.boxShadow = '0 0 2rem var(--color-primary)'
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2500);
})


// ---------------THEME/DISPLAY CUSTOMIZATIION-------------

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = 'none';
    }
}

//close modal
themeModal.addEventListener("click", closeThemeModal);



theme.addEventListener("click", openThemeModal);


// --------------- FONTS -------------

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    let fontSize;
    size.addEventListener("click", () => {
        removeSizeSelector();
        size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');
    }
    else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
    }
    else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    }
    else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-right', '-35rem');
    }
    else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('----sticky-top-left', '-12rem');
        root.style.setProperty('----sticky-top-right', '-35rem');
    }

    //change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
})
    
})

// CHANGE PRIMARY COLORS -------------------------------

// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//change primary colors
colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        let primaryHue;
        changeActiveColorClass();
        
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        root.style.setProperty('--primary-hue',primaryHue);
    })
})

// THEME BACKGROUND VALUES ---------------------------
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


//change BG color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}


Bg1.addEventListener("click", () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class 
    Bg1.classList.add('active');
    //remove active class from others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});

Bg2.addEventListener("click", () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class 
    Bg2.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener("click", () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class 
    Bg3.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

});


// CSS - customize-theme (Responsiveness) - 2:12
// JS - notification search filtration - 2:03 
// JS - fontSize ....themecustomization