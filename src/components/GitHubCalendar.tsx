import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributions: React.FC = () => {
    // Custom theme colors for GitHub Calendar
    const colorTheme = {
        light: [
            '#808080', // level 0 (no contributions) → subtle gray (visible on white)
            '#bbf7d0', // level 1 (Tailwind green-200)
            '#86efac', // level 2 (green-300)
            '#4ade80', // level 3 (green-400)
            '#22c55e', // level 4 (green-500)
        ],
        dark: [
            '#808080', // level 0 (dark gray for no contributions in dark mode)
            '#0e4429',
            '#006d32',
            '#26a641',
            '#39d353',
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
