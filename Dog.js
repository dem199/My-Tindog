class Dog {
    constructor(data){
    Object.assign(this, data)
}
    getDogHtml() {
        const { elementId, name, avatar, age, bio } = this;
        return `
        <div class="rex-container content">
        <img class="rex" src="${avatar}"/>
        <h1>${name}, <span class="age">${age}</span></h1>
        <p>${bio}</p>
        <div id="reaction"></div>
        </div>
        `
    }
}
export default Dog



