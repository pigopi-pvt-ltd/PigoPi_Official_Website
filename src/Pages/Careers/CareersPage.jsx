import React, { useState, useMemo } from 'react';
import GoToTopButton from '../../Components/GoToTopButton';

const dummyJobs = [
  // {
  //   id: 1,
  //   title: 'Frontend Developer',
  //   location: 'Remote',
  //   department: 'Engineering',
  //   type: 'Full-time',
  //   description: 'Build and maintain user-facing features using React.',
  // },
  // {
  //   id: 2,
  //   title: 'Backend Developer',
  //   location: 'New York, NY',
  //   department: 'Engineering',
  //   type: 'Full-time',
  //   description: 'Develop scalable backend services and APIs.',
  // },
  // {
  //   id: 3,
  //   title: 'Product Manager',
  //   location: 'San Francisco, CA',
  //   department: 'Product',
  //   type: 'Full-time',
  //   description: 'Lead product development and strategy.',
  // },
  // {
  //   id: 4,
  //   title: 'UX Designer',
  //   location: 'Remote',
  //   department: 'Design',
  //   type: 'Intern',
  //   description: 'Design user experiences and interfaces.',
  // },
  // {
  //   id: 5,
  //   title: 'QA Engineer',
  //   location: 'Austin, TX',
  //   department: 'Engineering',
  //   type: 'Full-time',
  //   description: 'Test and ensure software quality.',
  // },
  // {
  //   id: 6,
  //   title: 'DevOps Engineer',
  //   location: 'Remote',
  //   department: 'Engineering',
  //   type: 'Full-time',
  //   description: 'Manage infrastructure and deployment pipelines.',
  // },
  // {
  //   id: 7,
  //   title: 'Marketing Specialist',
  //   location: 'New York, NY',
  //   department: 'Marketing',
  //   type: 'Part-time',
  //   description: 'Develop marketing campaigns and content.',
  // },
  // {
  //   id: 8,
  //   title: 'Data Scientist',
  //   location: 'San Francisco, CA',
  //   department: 'Data',
  //   type: 'Full-time',
  //   description: 'Analyze data and build predictive models.',
  // },
  // {
  //   id: 9,
  //   title: 'Customer Support',
  //   location: 'Remote',
  //   department: 'Support',
  //   type: 'Full-time',
  //   description: 'Provide customer support and resolve issues.',
  // },
  // {
  //   id: 10,
  //   title: 'HR Manager',
  //   location: 'Austin, TX',
  //   department: 'Human Resources',
  //   type: 'Full-time',
  //   description: 'Manage recruitment and employee relations.',
  // },
];

const uniqueValues = (items, key) => {
  return [...new Set(items.map(item => item[key]))];
};

const CareersPage = () => {
  const [filters, setFilters] = useState({
    location: 'All',
    department: 'All',
    type: 'All',
  });

  const locations = useMemo(() => ['All', ...uniqueValues(dummyJobs, 'location')], []);
  const departments = useMemo(() => ['All', ...uniqueValues(dummyJobs, 'department')], []);
  const types = useMemo(() => ['All', ...uniqueValues(dummyJobs, 'type')], []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredJobs = useMemo(() => {
    return dummyJobs.filter(job => {
      return (filters.location === 'All' || job.location === filters.location) &&
             (filters.department === 'All' || job.department === filters.department) &&
             (filters.type === 'All' || job.type === filters.type);
    });
  }, [filters]);

  return (
    <>
      <div className="careers-page bg-black mx-auto md:pt-20 pt-30 p-8">
        <div className='w-full mx-auto max-w-6xl'> 
          <h1 className="text-[5vw]  select-none mb-8 text-white font-extrabold tracking-wide font-[Host_Grotesk] text-center">Careers</h1>
                <div className="filters flex flex-wrap gap-6 mb-12">
                  <div className="flex flex-col">
                    <label htmlFor="location" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">Location:</label>
                    <select
                      name="location"
                      id="location"
                      value={filters.location}
                      onChange={handleFilterChange}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                    >
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="department" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">Department:</label>
                    <select
                      name="department"
                      id="department"
                      value={filters.department}
                      onChange={handleFilterChange}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                    >
                      {departments.map(dep => (
                        <option key={dep} value={dep}>{dep}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="type" className="mb-2 font-semibold text-gray-700 dark:text-gray-300">Job Type:</label>
                    <select
                      name="type"
                      id="type"
                      value={filters.type}
                      onChange={handleFilterChange}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                    >
                      {types.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="job-listings flex flex-col gap-8">
              {filteredJobs.length === 0 ? (
                <p className="text-center text-white text-xl font-semibold">Currently, No Current Opening Avaliable</p>
              ) : (
                filteredJobs.map(job => (
          <div
            key={job.id}
            className="job-card relative p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <button
              className="absolute top-4 right-4 px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Apply Now
            </button>
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{job.title}</h2>
            <p className="text-gray-700 dark:text-gray-300"><strong>Location:</strong> {job.location}</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Department:</strong> {job.department}</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Type:</strong> {job.type}</p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">{job.description}</p>
          </div>
                ))
              )}
                </div>
          </div>
      </div>
      <GoToTopButton />
    </>
  );
};

export default CareersPage;
