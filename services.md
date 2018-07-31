Presentation Logic (Component, directive, pipes)

Business Logic (service)
Communication (RESTful server) (service)
Data sharing

Component  (data)
        child L 1 component (input data)
            child L 2  (input data)
                child L3  (input data)
                    child L4 (input data)


Service {
    data
}

Component   (inject service)
        child L 1 component  
            child L 2   
                child L3   
                    child L4     (inject service)