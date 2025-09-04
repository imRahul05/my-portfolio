import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Settings, Check, X } from 'lucide-react';
import { colorPalettes } from './components/GithubcalendarColor';

const GitHubContributions: React.FC = () => {
    const [colorPaletteOpen, setColorPaletteOpen] = useState(false);
    const [selectedPalette, setSelectedPalette] = useState<'blue' | 'green' | 'purple' | 'red' | 'amber'>('blue');
    const colorPickerRef = React.useRef<HTMLDivElement>(null);

    // Handle click outside to close the color palette
    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
                setColorPaletteOpen(false);
            }
        }

        if (colorPaletteOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [colorPaletteOpen]);

    const colorTheme = colorPalettes[selectedPalette];

    return (
        <section id="github-contributions" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="relative mb-8 flex items-center justify-center">
                    {/* Centered Title */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
                        GitHub Contributions
                    </h2>

                    {/* Color Palette Selector (aligned right) */}
                    <div className="absolute right-0 flex items-center">
                        <button
                            onClick={() => setColorPaletteOpen(!colorPaletteOpen)}
                            className={`flex items-center gap-2 ${colorPaletteOpen
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                                } px-4 py-2 rounded-lg transition-colors duration-200`}
                        >
                            <Settings size={16} className={colorPaletteOpen ? 'animate-spin' : ''} />
                            {colorPaletteOpen ? 'Select a Theme' : 'Customize Colors'}
                        </button>

                        {/* Current palette indicator */}
                        {!colorPaletteOpen && (
                            <div className="ml-2 flex gap-1">
                                {colorPalettes[selectedPalette].light.slice(1).map((color, i) => (
                                    <div
                                        key={i}
                                        className="w-4 h-4 rounded-sm"
                                        style={{ backgroundColor: color }}
                                    ></div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Color Palette Popup */}
                    {colorPaletteOpen && (
                        <>
                            {/* Overlay */}
                            <div className="fixed inset-0 bg-black/20 z-10 backdrop-blur-sm" />

                            <div className="absolute z-20 top-14 right-0 left-0 flex justify-center">
                                <div
                                    ref={colorPickerRef}
                                    className="bg-white p-6 rounded-xl shadow-xl border border-gray-200 w-full max-w-md animate-in fade-in-0 zoom-in-95 duration-200"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-semibold text-gray-800">Choose Color Theme</h3>
                                        <button
                                            onClick={() => setColorPaletteOpen(false)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <p className="text-sm text-gray-600 mb-4">
                                        Select a color theme to personalize the appearance of your GitHub contribution calendar.
                                    </p>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                                        {Object.entries(colorPalettes).map(([name, palette]) => (
                                            <button
                                                key={name}
                                                onClick={() => {
                                                    setSelectedPalette(name as any);
                                                    setColorPaletteOpen(false);
                                                }}
                                                className={`flex flex-col items-center p-3 rounded-lg transition-all ${selectedPalette === name
                                                        ? 'bg-blue-50 ring-2 ring-blue-500'
                                                        : 'hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="flex gap-1 mb-2">
                                                    {palette.light.slice(1).map((color, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-5 h-5 rounded-sm"
                                                            style={{ backgroundColor: color }}
                                                        ></div>
                                                    ))}
                                                </div>
                                                <span className="text-sm capitalize">{name}</span>
                                                {selectedPalette === name && (
                                                    <Check size={16} className="text-blue-500 mt-1" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>


                {/* GitHub Calendar Card */}
                <div className="rounded-xl p-6 md:p-10 shadow-md">
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
                                // labels={{
                                //     tooltip: "Contributions: <count> on <date>",
                                // }}
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
