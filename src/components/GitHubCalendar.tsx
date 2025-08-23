import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributions: React.FC = () => {
    // Custom theme colors for GitHub Calendar
    const colorTheme = {
        light: [
            '#808080',
            '#e9d5ff', // purple-200
            '#d8b4fe', // purple-300
            '#c084fc', // purple-400
            '#a855f7', // purple-500
        ],


       dark: [
   '#808080',
  '#fde68a', // amber-200
  '#fcd34d', // amber-300
  '#fbbf24', // amber-400
  '#f59e0b', // amber-500
],

    };


    return (
        <section id="github-contributions" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        GitHub Contributions
                    </h2>

                </div>

                {/* GitHub Calendar Card */}
                <div className=" rounded-xl p-6 md:p-10 shadow-md">
                    <div className="flex flex-col items-center">
                        <div className="w-full overflow-x-auto">
                            <div className="min-w-max">
                                <GitHubCalendar
                                    username="imRahul05"
                                    blockSize={15}
                                    blockMargin={5}
                                    fontSize={16}
                                    theme={colorTheme}
                                    hideColorLegend={false}
                                    hideMonthLabels={false}
                                    labels={{
                                        tooltip: "Contributions: <count> on <date>",
                                    }}
                                />
                            </div>
                        </div>

                        {/* GitHub Profile Button */}
                        <div className="mt-8 text-center">
                            <a
                                href="https://github.com/imRahul05"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow"
                            >
                                View GitHub Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubContributions;
