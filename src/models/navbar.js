export class NavBarItem {
    constructor(title, hasMenu = false, menu = [], path = '#') {
        this.title = title;
        this.hasMenu = hasMenu;
        this.menu = menu;
        this.path = path;
    }
}

export class MenuItem {
    constructor(title, icon, hasSubMenu = false, subMenu = [], path = '#') {
        this.title = title;
        this.icon = icon;
        this.hasSubMenu = hasSubMenu;
        this.subMenu = subMenu;
        this.path = path;
    }
}