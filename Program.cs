using System.Threading.Tasks;
using Statiq.App;
using Statiq.Web;

namespace Website
{
	class Program
	{
		static async Task<int> Main(string[] args) =>
			await Bootstrapper
			.Factory
			.CreateWeb(args)
			//.DeployToNetlify(Config.FromSetting("NETLIFY_WEBSITE_ID"), Config.FromSetting("NETLIFY_TOKEN"))
			.RunAsync();
	}
}
