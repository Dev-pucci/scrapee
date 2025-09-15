import React, { useState } from 'react';

// --- SVG Icon Components ---
// Using inline SVGs to keep everything in a single file.

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);

const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" /></svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
);

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);

const WorkersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 6v6" /><path d="m15.5 3.5-1 1m-5 0-1-1" /><path d="m20.5 8.5-1 1m-11 0-1-1" /><path d="m20.5 15.5-1-1m-11 0-1 1" /><path d="m15.5 20.5-1-1m-5 0-1 1" /></svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2.4l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2.4l.15-.08a2 2 0 0 0 .73 2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
);

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m15 18-6-6 6-6" /></svg>
);

const UserCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-gray-400"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"><circle cx="11" cy="11" r="8" /><line x1="21" x2="16.65" y1="21" y2="16.65" /></svg>
);

// --- Reusable Components ---

const ScrapeOpsLogo = ({ isCollapsed }) => (
    <div className={`h-16 flex items-center border-b border-gray-200 ${isCollapsed ? 'justify-center' : 'px-4'}`}>
        <svg
            width={isCollapsed ? "32" : "24"}
            height={isCollapsed ? "32" : "24"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-500 transition-all"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.752 6.557c.22-.42.72-.61 1.139-.39l5.964 3.14c.42.22.61.72.39 1.139l-3.14 5.964a.875.875 0 0 1-1.14.39l-5.963-3.14a.875.875 0 0 1-.39-1.139l3.14-5.964zm-.12 1.905 2.628 4.996-4.996-2.628 2.368-2.368zm4.496 4.496 2.368-2.368-4.996-2.628 2.628 4.996z"
                fill="currentColor"
            />
        </svg>
    </div>
);

const Sidebar = ({ activePage, setActivePage, isCollapsed, setIsCollapsed }) => {
  const navItems = [
    { id: 'dashboard', icon: <HomeIcon />, label: 'Dashboard' },
    { id: 'job-manager', icon: <BarChartIcon />, label: 'Job Manager' },
    { id: 'job-scheduler', icon: <CalendarIcon />, label: 'Job Scheduler' },
    { id: 'workers', icon: <WorkersIcon />, label: 'Workers' },
    { id: 'parser', icon: <CodeIcon />, label: 'Parser' },
    { id: 'settings', icon: <SettingsIcon />, label: 'Settings' },
  ];

  const NavLink = ({ id, icon, label, active = false }) => (
    <button
      onClick={() => setActivePage(id)}
      className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${ isCollapsed ? 'justify-center' : ''} ${
        active
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {icon}
      {!isCollapsed && <span className="ml-3">{label}</span>}
    </button>
  );

  return (
    <aside className={`flex-shrink-0 bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <ScrapeOpsLogo isCollapsed={isCollapsed} />
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink key={item.id} {...item} active={activePage === item.id} />
        ))}
      </nav>
      <div className="px-2 py-4 mt-auto border-t border-gray-200">
        <button onClick={() => setIsCollapsed(!isCollapsed)} className={`flex items-center w-full px-4 py-2 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 ${isCollapsed ? 'justify-center' : ''}`}>
            <ChevronLeftIcon className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
            {!isCollapsed && <span className="ml-3">Collapse</span>}
        </button>
      </div>
       <div className={`py-3 border-t border-gray-200 ${isCollapsed ? 'flex justify-center' : 'px-4'}`}>
            <UserCircleIcon />
        </div>
    </aside>
  );
};

// --- Page Components ---

const StatCard = ({ title, value, period, unhealthy = false }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-200 flex-1">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>
            {unhealthy && <span className="h-3 w-3 bg-green-500 rounded-full"></span>}
        </div>
        <p className="text-xs text-gray-400 mt-2">{period}</p>
    </div>
);

const StatsExplorer = () => {
    const [activeTab, setActiveTab] = useState('overall');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const StatPill = ({ title, value, color }) => (
        <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${color}`}></span>
            <span className="font-bold text-gray-800">{value}</span>
            <span className="text-gray-500 text-sm">{title}</span>
        </div>
    );

    const SpiderDetailPanel = () => (
        <div className="w-1/3 bg-white border-l border-gray-200 p-4 ml-4 rounded-r-lg">
             <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Jobs</h3>
                <select className="p-2 border border-gray-300 rounded-md text-sm text-gray-700">
                    <option>Last 24 Hours</option>
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                </select>
            </div>
            <div className="relative mb-4">
                <SearchIcon />
                <input type="text" placeholder="Search Job & Spider Names" className="pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm w-full" />
            </div>
            <div className="flex items-center gap-4 text-sm font-medium border-b mb-4">
                <button className="text-blue-600 border-b-2 border-blue-600 pb-2 px-2">All</button>
                <button className="text-gray-500 pb-2 px-2">Running</button>
                <button className="text-gray-500 pb-2 px-2">Completed</button>
                <button className="text-gray-500 pb-2 px-2">Errors</button>
            </div>
            <div className="text-center py-16 text-gray-500">
                No job data available.
            </div>
             <div className="flex justify-between text-sm mt-4">
                <button className="text-blue-600 hover:underline">Close All</button>
                <button className="text-blue-600 hover:underline">Open All</button>
            </div>
        </div>
    );

    const SpidersJobsExplorer = () => {
        const [spiderStats, setSpiderStats] = useState({
            runTime: '-',
            pages: 0,
            missedPages: 0,
            items: 0,
            coverage: '0%',
            successRate: '0%',
            checks: '0/0',
            warnings: 0,
            errors: 0
        });
        const [spiderTableData, setSpiderTableData] = useState([]);
        const spiderTableHeaders = ["Job/Spider", "Time", "Status", "Runtime", "Pages", "Items", "Checks", "Errors"];
        return (
            <div className="p-4 flex-1">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">Jobs Explorer</h3>
                    <div className="text-gray-500">...</div>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium mt-4">
                    <button className="text-blue-600 border-b-2 border-blue-600 pb-1">Pages</button>
                    <button className="text-gray-500 pb-1">Items</button>
                    <button className="text-gray-500 pb-1">Fields</button>
                    <button className="text-gray-500 pb-1">Coverage</button>
                    <button className="text-gray-500 pb-1">Run Time</button>
                    <button className="text-gray-500 pb-1">Status Codes</button>
                    <button className="text-gray-500 pb-1">Success Rate</button>
                    <button className="text-gray-500 pb-1">Errors</button>
                </div>

                <div className="h-64 mt-4 bg-gray-50 rounded-md flex items-center justify-center">
                   <p className="text-gray-400 text-sm">Chart placeholder</p>
                </div>
                
                <div className="mt-4 flex flex-wrap justify-between items-center gap-4 text-xs">
                    <StatPill title="Run Time" value={spiderStats.runTime} color="bg-gray-300" />
                    <StatPill title="Pages" value={spiderStats.pages} color="bg-gray-300" />
                    <StatPill title="Missed Pages" value={spiderStats.missedPages} color="bg-green-500" />
                    <StatPill title="Items" value={spiderStats.items} color="bg-gray-300" />
                    <StatPill title="Coverage" value={spiderStats.coverage} color="bg-gray-300" />
                    <StatPill title="Success Rate" value={spiderStats.successRate} color="bg-gray-300" />
                    <StatPill title="Checks" value={spiderStats.checks} color="bg-green-500" />
                     <div className="flex items-center gap-4">
                        <span className="text-green-600 font-semibold">{spiderStats.warnings} Warnings</span>
                        <span className="text-green-600 font-semibold">{spiderStats.errors} Errors</span>
                    </div>
                </div>

                <div className="mt-4">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                {spiderTableHeaders.map(h => <th key={h} scope="col" className="px-4 py-3">{h}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {spiderTableData.length === 0 ? (
                                <tr>
                                    <td colSpan={spiderTableHeaders.length} className="text-center py-16 text-gray-500">
                                        No job data available.
                                    </td>
                                </tr>
                            ) : (
                                spiderTableData.map((row, index) => (
                                    <tr key={index}>
                                        {spiderTableHeaders.map((header, idx) => (
                                            <td key={idx} className="px-4 py-3">{row[header] || '-'}</td>
                                        ))}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const OverallExplorer = () => {
        const [overallStats, setOverallStats] = useState({
            numJobs: 0,
            runTime: '-',
            pages: 0,
            missedPages: 0,
            items: 0,
            coverage: '0%',
            successRate: '0%',
            checks: '0/0',
            warnings: 0,
            errors: 0
        });
        const explorerData = [];
        const explorerHeaders = ['Day', 'Num Jobs', 'Running', 'Finished', 'Runtime', 'Pages', 'Missed Pages', 'Items', 'Coverage', 'Warnings', 'Warning Events', 'Errors', 'Error Events', 'Checks'];

        return (
            <div className="p-4 flex-1">
                <h3 className="font-semibold text-gray-800">Overall Stats Explorer</h3>
                 <div className="h-64 mt-4 bg-gray-50 rounded-md flex items-center justify-center">
                   <p className="text-gray-400 text-sm">Chart placeholder</p>
                </div>
                <div className="mt-4 flex flex-wrap justify-between items-center gap-4 text-xs">
                    <StatPill title="Num Jobs" value={overallStats.numJobs} color="bg-blue-500" />
                    <StatPill title="Run Time" value={overallStats.runTime} color="bg-gray-300" />
                    <StatPill title="Pages" value={overallStats.pages} color="bg-gray-300" />
                    <StatPill title="Missed Pages" value={overallStats.missedPages} color="bg-green-500" />
                    <StatPill title="Items" value={overallStats.items} color="bg-gray-300" />
                    <StatPill title="Coverage" value={overallStats.coverage} color="bg-gray-300" />
                    <StatPill title="Success Rate" value={overallStats.successRate} color="bg-gray-300" />
                    <StatPill title="Checks" value={overallStats.checks} color="bg-green-500" />
                    <div className="flex items-center gap-4">
                        <span className="text-green-600 font-semibold">{overallStats.warnings} Warnings</span>
                        <span className="text-green-600 font-semibold">{overallStats.errors} Errors</span>
                    </div>
                </div>
                <div className="mt-4 overflow-x-auto">
                    <div className="grid gap-y-2" style={{ gridTemplateColumns: `repeat(${explorerHeaders.length}, minmax(100px, 1fr))` }}>
                        {explorerHeaders.map(h => <div key={h} className="text-xs text-gray-500 font-semibold uppercase py-2">{h}</div>)}
                        {explorerData.length === 0 ? (
                            <div className="col-span-full text-center py-8 text-gray-500">
                                No data available.
                            </div>
                        ) : (
                            explorerData.map((row, rowIndex) => (
                                <React.Fragment key={rowIndex}>
                                    {Object.entries(row).map(([key, value]) => (
                                        <div key={`${rowIndex}-${key}`} className={`text-sm py-2 border-t border-gray-200 ${
                                            (key === 'warnings' && value > 0) ? 'text-orange-500' : 
                                            (key === 'errors' && value > 0) ? 'text-red-500' : 'text-gray-800'
                                        }`}>{value}</div>
                                    ))}
                                </React.Fragment>
                            ))
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="mt-6 bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                 <div className="flex items-center gap-1">
                    <button onClick={() => handleTabClick('dashboard')} className={`px-3 py-1 text-sm font-semibold rounded-md ${activeTab === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>Dashboard</button>
                    <button onClick={() => handleTabClick('overall')} className={`px-3 py-1 text-sm font-semibold rounded-md ${activeTab === 'overall' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>Overall</button>
                    <button onClick={() => handleTabClick('spiders')} className={`px-3 py-1 text-sm font-semibold rounded-md ${activeTab === 'spiders' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>Spiders Jobs</button>
                    <button onClick={() => handleTabClick('errors')} className={`px-3 py-1 text-sm font-semibold rounded-md ${activeTab === 'errors' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>Errors</button>
                </div>
                 <button className="text-sm text-blue-600 font-semibold hover:underline">Refresh Stats</button>
            </div>
            <div className="flex">
                {activeTab === 'spiders' ? <SpidersJobsExplorer /> : <OverallExplorer />}
                {activeTab === 'spiders' && <SpiderDetailPanel />}
            </div>
        </div>
    );
};

const DashboardPage = () => {
    const [dashboardStats, setDashboardStats] = useState({
        activeJobs: 0,
        scheduledJobs: 0,
        completedJobs: 0,
        unhealthyJobs: 0
    });
    const [dashboardScheduledJobs, setDashboardScheduledJobs] = useState([]);

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <span className="text-sm text-gray-500">0 Servers</span>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Active Jobs" value={dashboardStats.activeJobs} period="Live" />
                <StatCard title="Scheduled Jobs" value={dashboardStats.scheduledJobs} period="Next 24 hours" />
                <StatCard title="Completed Jobs" value={dashboardStats.completedJobs} period="Today" />
                <StatCard title="Unhealthy Jobs" value={dashboardStats.unhealthyJobs} period="Today" unhealthy />
            </div>
            <StatsExplorer />
             <div className="mt-6 bg-white rounded-lg border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                     <h3 className="font-semibold text-gray-800">Scheduled Jobs</h3>
                </div>
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Job/Spider</th>
                            <th scope="col" className="px-6 py-3">Frequency</th>
                            <th scope="col" className="px-6 py-3">Next Run</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dashboardScheduledJobs.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="text-center py-8 text-gray-500">No scheduled jobs.</td>
                            </tr>
                        ) : (
                            dashboardScheduledJobs.map((job, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-3">{job['Job/Spider'] || '-'}</td>
                                    <td className="px-6 py-3">{job['Frequency'] || '-'}</td>
                                    <td className="px-6 py-3">{job['Next Run'] || '-'}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
             </div>
        </div>
    );
};

const JobManagerPage = () => {
    const [jobData, setJobData] = useState([]);
    const tableHeaders = ["Job/Spider", "Time", "Status", "Runtime", "Pages", "Items", "Coverage", "Checks", "Errors"];

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900">Jobs Manager</h1>
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Schedule Job</span>
                <input type="text" placeholder="Using cron job" className="flex-grow p-2 border border-gray-300 rounded-md text-sm" />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700">Schedule</button>
            </div>
            <div className="mt-6 bg-white rounded-lg border border-gray-200">
                <div className="p-4 flex justify-between items-center border-b border-gray-200">
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <button className="text-blue-600 border-b-2 border-blue-600 pb-2">All Jobs</button>
                        <button className="text-gray-500 pb-2">Completed Jobs</button>
                        <button className="text-gray-500 pb-2">Running Jobs</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <SearchIcon />
                            <input type="text" placeholder="Search Job & Spider Names" className="pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm w-64" />
                        </div>
                        <select className="p-2 border border-gray-300 rounded-md text-sm text-gray-700">
                            <option>Last 24 Hours</option>
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                </div>
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            {tableHeaders.map(h => <th key={h} scope="col" className="px-6 py-3">{h}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {jobData.length === 0 ? (
                            <tr>
                                <td colSpan={tableHeaders.length} className="text-center py-16 text-gray-500">
                                    No job data available.
                                </td>
                            </tr>
                        ) : (
                            jobData.map((job, index) => (
                                <tr key={index}>
                                    {tableHeaders.map((header, idx) => (
                                        <td key={idx} className="px-6 py-3">{job[header] || '-'}</td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const JobSchedulerPage = () => {
    const [scheduledJobs, setScheduledJobs] = useState([]);
    const tableHeaders = ["Enabled", "Job/Spider", "Server", "Status", "Cron", "Frequency (UTC)", "Last Run", "Next Run", "Action"];

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900">Scheduler</h1>
             <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Schedule Job</span>
                <input type="text" placeholder="Using cron job" className="flex-grow p-2 border border-gray-300 rounded-md text-sm" />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700">Schedule</button>
            </div>
            <div className="mt-6 bg-white rounded-lg border border-gray-200">
                <div className="p-4 flex justify-between items-center border-b border-gray-200">
                    <h2 className="font-semibold text-gray-800">Scheduled Jobs</h2>
                    <div className="relative">
                        <SearchIcon />
                        <input type="text" placeholder="Search Job & Spider Names" className="pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm w-64" />
                    </div>
                </div>
                 <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            {tableHeaders.map(h => <th key={h} scope="col" className="px-6 py-3">{h}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {scheduledJobs.length === 0 ? (
                            <tr>
                                <td colSpan={tableHeaders.length} className="text-center py-16 text-gray-500">
                                    No scheduled jobs found.
                                </td>
                            </tr>
                        ) : (
                            scheduledJobs.map((job, index) => (
                                <tr key={index}>
                                    {tableHeaders.map((header, idx) => (
                                        <td key={idx} className="px-6 py-3">{job[header] || '-'}</td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const WorkersPage = () => {
    const [workers, setWorkers] = useState([]);

    const [activeTasks, setActiveTasks] = useState([]);

    const WorkerCard = ({ worker }) => (
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                    <div className="text-3xl mr-3">{worker.icon}</div>
                    <div>
                        <h3 className="font-semibold text-gray-900">{worker.name}</h3>
                        <p className="text-sm text-gray-500">{worker.description}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className={`w-3 h-3 rounded-full ${worker.status === 'online' ? 'bg-green-400' : 'bg-red-400'}`}></span>
                    <span className={`ml-2 text-sm font-medium ${worker.status === 'online' ? 'text-green-600' : 'text-red-600'}`}>
                        {worker.status === 'online' ? 'Online' : 'Offline'}
                    </span>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <p className="text-sm text-gray-500">Total Tasks</p>
                    <p className="font-semibold text-gray-900">{worker.stats.totalTasks}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Success Rate</p>
                    <p className="font-semibold text-gray-900">{worker.stats.successRate}%</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Products Scraped</p>
                    <p className="font-semibold text-gray-900">{worker.stats.totalProducts.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Active Tasks</p>
                    <p className="font-semibold text-gray-900">{worker.stats.activeTasks}</p>
                </div>
            </div>
            
            <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                    Open Worker
                </button>
                <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
                    Health Check
                </button>
            </div>
        </div>
    );

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Workers</h1>
                <span className="text-sm text-gray-500">{workers.filter(w => w.status === 'online').length}/{workers.length} Workers Online</span>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {workers.map((worker) => (
                    <WorkerCard key={worker.id} worker={worker} />
                ))}
            </div>

            <div className="mt-6 bg-white rounded-lg border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">Active Tasks</h3>
                </div>
                <div className="p-4">
                    {activeTasks.length > 0 ? (
                        <div className="space-y-4">
                            {activeTasks.map((task) => (
                                <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                    <div className="flex items-center">
                                        <div className="text-lg mr-3">
                                            {workers.find(w => w.id === task.worker)?.icon}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                {workers.find(w => w.id === task.worker)?.name}
                                            </p>
                                            <p className="text-sm text-gray-500">Query: "{task.query}"</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                                            <div 
                                                className="bg-blue-600 h-2 rounded-full transition-all"
                                                style={{ width: `${task.progress}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{task.progress}%</span>
                                        <button className="ml-3 px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded">
                                            Stop
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center py-8 text-gray-500">No active tasks</p>
                    )}
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Total Workers" value={workers.length} period="Available" />
                <StatCard title="Online Workers" value={workers.filter(w => w.status === 'online').length} period="Active now" />
                <StatCard title="Active Tasks" value={activeTasks.length} period="Running" />
            </div>
        </div>
    );
};

const PlaceholderPage = ({ title }) => (
    <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <div className="mt-6 p-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
            <p className="text-gray-500">This is the placeholder page for {title}.</p>
        </div>
    </div>
);


// --- Main App Component ---

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const renderActivePage = () => {
      switch (activePage) {
          case 'dashboard':
              return <DashboardPage />;
          case 'job-manager':
              return <JobManagerPage />;
          case 'job-scheduler':
              return <JobSchedulerPage />;
          case 'workers':
              return <WorkersPage />;
          case 'parser':
              return <PlaceholderPage title="Parser" />;
          case 'settings':
              return <PlaceholderPage title="Settings" />;
          default:
              return <DashboardPage />;
      }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex font-sans">
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      <main className="flex-1 p-8 overflow-y-auto">
        <div>
            {renderActivePage()}
        </div>
      </main>
    </div>
  );
}

