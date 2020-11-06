export default class Navigation {
    constructor() {
        const buttons = document.querySelectorAll('.pageView:first-child button');
        const backArrows = document.querySelectorAll('.pageView .backArrow');

        buttons.forEach(this.addActivateEventListener.bind(this));
        backArrows.forEach(this.addDeactivateEventListener.bind(this));
    }

    addActivateEventListener(button) {
        button.addEventListener('click', this.activateView.bind(this), false)
    }

    addDeactivateEventListener(button) {
        button.addEventListener('click', this.deactivateView.bind(this), false)
    }

    activateView(e) {
        const pageViewId = e.target.value;
        document.getElementById(pageViewId).classList.add('active');
    }

    deactivateView(e) {
        const pageViewId = e.target.parentNode.id;
        document.getElementById(pageViewId).classList.remove('active');
    }
}