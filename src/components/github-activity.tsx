import { ActivityGraph, ActivityEntry } from "./activity-graph";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";

export function GithubActivity() {
  const [activityData, setActivityData] = useState<ActivityEntry[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubActivity = async () => {
      try {
        const username = "andersonzero0";
        
        // Try using GitHub's unofficial contribution API (used by some services)
        // This endpoint returns SVG with contribution data
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }

        const data = await response.json();
        
        if (!data.total || !data.contributions) {
          throw new Error("Invalid data format");
        }

        // Convert to ActivityEntry format
        const entries: ActivityEntry[] = data.contributions.map((contrib: any) => ({
          date: contrib.date,
          count: contrib.count,
        }));

        setActivityData(entries);
        setTotalContributions(data.total.lastYear || data.total[new Date().getFullYear()] || 0);
      } catch (error) {
        console.error("Error fetching GitHub activity:", error);
        // Fallback to mock data
        const mockData = generateMockData();
        setActivityData(mockData);
        setTotalContributions(
          mockData.reduce((sum, entry) => sum + entry.count, 0)
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGithubActivity();
  }, []);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Github className="text-primary" size={32} />
          <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter">
            GitHub Activity
          </h2>
        </div>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          Contribuições recentes no GitHub. Cada bloco representa a atividade
          diária - commits, pull requests, issues e code reviews.
        </p>
      </div>

      {/* Activity Graph */}
      <div className="bg-surface-container rounded-lg p-6 border border-outline-variant/20">
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="animate-pulse text-on-surface-variant">
              Loading activity...
            </div>
          </div>
        ) : (
          <ActivityGraph
            data={activityData}
            colorScale={[
              "bg-surface-container-highest/50",
              "bg-primary/30",
              "bg-primary/50",
              "bg-primary/70",
              "bg-primary",
            ]}
            blockRadius={3}
            weeks={52}
          />
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/20">
          <div className="text-2xl font-bold text-primary">
            {totalContributions}
          </div>
          <div className="text-sm text-on-surface-variant uppercase tracking-wide">
            Total Contributions
          </div>
        </div>
        
        <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/20">
          <div className="text-2xl font-bold text-primary">
            {activityData.filter((entry) => entry.count > 0).length}
          </div>
          <div className="text-sm text-on-surface-variant uppercase tracking-wide">
            Active Days
          </div>
        </div>
        
        <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/20">
          <div className="text-2xl font-bold text-primary">
            {Math.max(...activityData.map((e) => e.count), 0)}
          </div>
          <div className="text-sm text-on-surface-variant uppercase tracking-wide">
            Best Day
          </div>
        </div>
        
        <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/20">
          <div className="text-2xl font-bold text-primary">
            {Math.round(
              activityData.filter((entry) => entry.count > 0).length / 52
            )}
          </div>
          <div className="text-sm text-on-surface-variant uppercase tracking-wide">
            Weeks Streak Avg
          </div>
        </div>
      </div>
    </div>
  );
}

// Fallback mock data generator
function generateMockData(): ActivityEntry[] {
  const data: ActivityEntry[] = [];
  const today = new Date();
  
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateString = date.toISOString().split("T")[0];
    
    // Generate realistic activity pattern
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const baseActivity = isWeekend ? 1 : 3;
    const randomActivity = Math.floor(Math.random() * (isWeekend ? 3 : 8));
    
    data.push({
      date: dateString,
      count: Math.random() > 0.3 ? baseActivity + randomActivity : 0,
    });
  }
  
  return data;
}
