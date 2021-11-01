export class LinkItem {
    constructor(id = 0, icon = "", label = "", path = "" ,active=false) {
        this.id = id
        this.icon = icon
        this.label = label
        this.path = path
        this.active=active
    }
}