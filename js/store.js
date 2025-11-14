// Step 1: Create the getJobs function
// TODO: Implement the getJobs function
function getJobs() {
    const jobsString = localStorage.getItem('jobs');
    let jobs;

    if (jobsString) {
    jobs = JSON.parse(jobsString);
    } else {
    jobs = [];
    }
    return jobs;
    // Get jobs from localStorage
    // If jobs exist, parse them and return, otherwise return an empty array
}

// Step 2: Create the getJob function
// TODO: Implement the getJob function
function getJob(id) {
    const jobs = getJobs();
    let searchJob = null;

    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === id) {
            searchJob = jobs[i];
            return searchJob;
        }
    }
return searchJob;
    // Get all jobs
    // Find the job with the matching id and return it
}

// Step 3: Create the addJob function
// TODO: Implement the addJob function
function addJob(job) {

    const jobs = getJobs();

    jobs.push(job);

    localStorage.setItem('jobs', JSON.stringify(jobs));

    // Get all jobs
    // Add the new job to the array
    // Save the updated array to localStorage
}

// Step 4: Create the updateJob function
// TODO: Implement the updateJob function
function updateJob(updatedJob) {
    
    const jobs = getJobs();
   const jobUpdate = [];
    for (let i = 0; i < jobs.length; i++) {

        const currentJob = jobs[i];
    
        if (currentJob.id === updatedJob.id) {
            jobUpdate.push(updatedJob);
        } else {
        jobUpdate.push(currentJob);
        }
    }

    localStorage.setItem('jobs', JSON.stringify(jobUpdate));


    // Get all jobs
    // Map through the jobs and replace the one with the matching id
    // Save the updated array to localStorage
}

// Step 5: Create the deleteJob function
// TODO: Implement the deleteJob function
function deleteJob(id) {
    const jobs = getJobs();
    const jobUpdate = [];
    for (let i = 0; i < jobs.length; i++) {

        const currentJob = jobs[i];
        if (currentJob.id !== id) {
            jobUpdate.push(currentJob);
        }
    }

    localStorage.setItem('jobs', JSON.stringify(jobUpdate));
    // Get all jobs
    // Filter out the job with the matching id
    // Save the updated array to localStorage
}

export { getJobs, getJob, addJob, updateJob, deleteJob };
