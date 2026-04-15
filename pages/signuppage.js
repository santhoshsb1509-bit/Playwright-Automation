exports.signup = class signup{
    constructor(page){
        this.page=page;
        // this.fname= page.getByRole('textbox', { name: 'First Name *' })
        // this.lname= page.getByRole('textbox', { name: 'Last Name *' })
        // this.uname= page.getByRole('textbox', { name: 'Username *' })
        // this.email= page.getByRole('textbox', { name: 'Email *' })
        // this.pwd= page.getByRole('textbox', { name: 'Password *' })
        // this.cpwd= page.getByRole('textbox', { name: 'Password Confirmation *' })
        // this.chxbox= page.getByTestId('consentedToTerms')
        // this.eschxbox= page.getByTestId('consentedToCallMessage')
        // this.cabtn= page.locator("//span[contains(text(),'Create Account')]")

        this.fname = page.locator('[name="firstName"]')
        this.lname = page.locator('[name="lastName"]')
        this.uname = page.locator('[name="username"]')
        this.email = page.locator('[name="emailAddress"]')
        this.pwd = page.locator('[name="password"]')
        this.cpwd = page.locator('[name="confirmPassword"]')
        this.chxbox = page.getByTestId('consentedToTerms')
        this.eschxbox = page.getByTestId('consentedToCallMessage')
        this.cabtn = page.getByRole('button', { name: 'Create Account' })
    }
         async createaccount( fname, lname, uname, emailid, password) 
        {
            await this.fname.fill(fname)
            await this.lname.fill(lname)
            await this.uname.fill(uname)
            await this.email.fill(emailid)
            await this.pwd.fill(password)
            await this.cpwd.fill(password)
            await this.chxbox.click({ force: true })
            await this.eschxbox.click({ force: true })
            await this.cabtn.click()
            
        }
    }

//module.export=signup;