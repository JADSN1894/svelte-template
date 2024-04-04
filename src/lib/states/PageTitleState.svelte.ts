export type PageTitle = "Dashboard"
    | "Leads"
    | "Transactions"
    | "Analytics"
    | "Integrations"
    | "Calendar"
    | "Login"
    | "Register"
    | "Forgot Password"
    | "Page Title"
    | "Settings"
    | "Bills"
    | "Team Members"
    | "Documentation"
    | ""
    | "Unknown"

interface PageTitleStateProps {
    pageTitle: PageTitle
}

function stubPageTitleStateProps() {
    return <PageTitleStateProps>{
        pageTitle: "Unknown"
    }
}

class PageTitleState {
    pageTitle = $state<PageTitle>("Unknown")

    constructor(initialValue: PageTitleStateProps) {
        this.pageTitle = initialValue.pageTitle
    }
}

export const pageTitleState = new PageTitleState(stubPageTitleStateProps());
