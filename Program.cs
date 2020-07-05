using System.Threading.Tasks;
using Statiq.App;
using Statiq.Common;
using Statiq.Web;

namespace Website
{
	class Program
	{
		static async Task<int> Main(string[] args) =>
			await Bootstrapper
			.Factory
			.CreateWeb(args)
			//these values are taken from the system's environment variables
			.DeployToNetlify(Config.FromSetting("NETLIFY_WEBSITE_ID"), Config.FromSetting("NETLIFY_TOKEN"))
			.RunAsync();
	}
}
