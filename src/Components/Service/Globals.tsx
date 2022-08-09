
class Globals {
}

class DevelopmentGlobals extends Globals {
    public urls = {
        admin: "http://localhost:8080/api/admin/", 
        customer: "http://localhost:8080/api/customer/", 
        company: "http://localhost:8080/api/company/"
    }
}

class ProductionGlobals extends Globals {
    public urls = {
        admin: "www.aws.com/MohseWebSite/admin/",
        customer: "www.aws.com/MohseWebSite/customer/",
        company: "www.aws.com/MohseWebSite/company/",
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;