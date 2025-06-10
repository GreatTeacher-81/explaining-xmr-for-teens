
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import FeatureCard from './components/FeatureCard';
import { ShieldCheckIcon, UserGroupIcon, EyeSlashIcon, ScaleIcon, LightBulbIcon, ExclamationTriangleIcon } from './components/IconComponents.tsx'; // Using a separate file for icons

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            Monero: Your <span className="text-accent-orange">Secret</span> Digital Cash
          </h1>
          <p className="text-lg md:text-xl text-secondary-text max-w-2xl mx-auto mb-8">
            Ever wondered about money that's truly private? Let's dive into Monero, the cryptocurrency that keeps your financial life on the down-low. 🤫
          </p>
          <img src="https://picsum.photos/seed/monerohero/1200/400" alt="Abstract representation of privacy and digital currency" className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mt-8" />
        </section>

        <Section title="🤔 What's Monero, Anyway?">
          <p className="text-lg text-secondary-text mb-4">
            Think of Monero (you say it like "mo-NAIR-oh") as digital cash you can use on the internet. Like Bitcoin, it's a type of cryptocurrency. But Monero has a superpower: <strong className="text-accent-orange">it's designed to be super private.</strong>
          </p>
          <p className="text-lg text-secondary-text">
            This means who you're sending money to, who's sending it to you, and how much you're sending is kept secret from prying eyes. It's like using cash, but for the online world!
          </p>
        </Section>

        <Section title="🤷‍♀️ Why Should Teens Care About Privacy?">
          <div className="grid md:grid-cols-2 gap-6 text-secondary-text text-lg">
            <div className="bg-secondary-bg p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary-text mb-2">Keep Your Purchases Private</h3>
              <p>Imagine if everyone knew every single thing you bought online or how much allowance you saved up. A bit weird, right? Monero helps you keep your spending habits to yourself.</p>
            </div>
            <div className="bg-secondary-bg p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary-text mb-2">Your Online Identity</h3>
              <p>Your financial info is part of your identity. Privacy gives you control over who sees what. It's about having the freedom to explore and transact without everything being tracked and linked back to you.</p>
            </div>
             <div className="bg-secondary-bg p-6 rounded-lg shadow-lg md:col-span-2">
              <h3 className="text-xl font-semibold text-primary-text mb-2">Freedom & Security</h3>
              <p>Financial privacy can be important for safety and security, especially online. It means not having to worry about your transaction history being misused or judged.</p>
            </div>
          </div>
        </Section>

        <Section title="✨ Monero's Secret Sauce: How It Stays Private">
          <p className="text-lg text-secondary-text mb-6 text-center">Monero uses some clever tech to keep things hush-hush. Here's the simple version:</p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<UserGroupIcon className="w-12 h-12 text-accent-orange" />}
              title="Ring Signatures"
              description="Imagine a group of friends signing a birthday card. The recipient knows it's from one of them, but not who exactly. Monero does this with senders – it mixes your transaction with others, so no one can pinpoint you as the sender."
            />
            <FeatureCard
              icon={<ShieldCheckIcon className="w-12 h-12 text-accent-orange" />}
              title="Stealth Addresses"
              description="Think of a secret, one-time P.O. box for every payment you receive. Only you and the sender know about it. This means your main 'wallet address' isn't publicly linked to transactions, keeping your balance and history private."
            />
            <FeatureCard
              icon={<EyeSlashIcon className="w-12 h-12 text-accent-orange" />}
              title="RingCT (Confidential Transactions)"
              description="This is like sending money in a sealed, dark envelope. The network knows a transaction happened, but the amount sent is hidden from everyone except the sender and receiver. Your financial details stay confidential."
            />
          </div>
        </Section>

        <Section title="🆚 Monero vs. Bitcoin: What's the Diff?">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary-bg p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-accent-teal mb-3">Bitcoin (BTC)</h3>
              <ul className="list-disc list-inside space-y-2 text-secondary-text">
                <li><strong className="text-primary-text">Transparency:</strong> Transactions are public on a blockchain. Anyone can see addresses and amounts (though names aren't directly attached).</li>
                <li><strong className="text-primary-text">Traceability:</strong> With some effort, transactions can often be traced back to individuals.</li>
                <li><strong className="text-primary-text">Analogy:</strong> Like a see-through piggy bank where everyone can see the coins going in and out.</li>
              </ul>
            </div>
            <div className="bg-secondary-bg p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-accent-orange mb-3">Monero (XMR)</h3>
              <ul className="list-disc list-inside space-y-2 text-secondary-text">
                <li><strong className="text-primary-text">Privacy by Default:</strong> Sender, receiver, and amount are hidden for ALL transactions.</li>
                <li><strong className="text-primary-text">Untraceability:</strong> Designed to be extremely difficult to trace transactions or link them to individuals.</li>
                <li><strong className="text-primary-text">Analogy:</strong> Like a secret diary for your money, or using cash – private and untraceable.</li>
              </ul>
            </div>
          </div>
        </Section>
        
        <Section title="💡 Cool, So What Can You Do With Monero?">
            <div className="bg-secondary-bg p-6 rounded-lg shadow-lg text-secondary-text">
                <ul className="list-none space-y-4">
                    <li className="flex items-start">
                        <LightBulbIcon className="w-6 h-6 text-accent-orange mr-3 mt-1 flex-shrink-0" />
                        <span><strong className="text-primary-text">Buy stuff online privately:</strong> Some merchants accept Monero, allowing you to purchase goods or services without linking your identity to the payment.</span>
                    </li>
                    <li className="flex items-start">
                        <LightBulbIcon className="w-6 h-6 text-accent-orange mr-3 mt-1 flex-shrink-0" />
                        <span><strong className="text-primary-text">Support causes anonymously:</strong> If you want to donate to a cause without revealing your identity, Monero can be an option.</span>
                    </li>
                    <li className="flex items-start">
                        <LightBulbIcon className="w-6 h-6 text-accent-orange mr-3 mt-1 flex-shrink-0" />
                        <span><strong className="text-primary-text">Learn about financial tech:</strong> Exploring Monero is a great way to understand different approaches to digital currency and privacy technology.</span>
                    </li>
                </ul>
                 <p className="mt-4 text-sm">
                    Remember, the world of crypto is always changing, so what's available today might be different tomorrow!
                </p>
            </div>
        </Section>

        <Section title="⚠️ Heads Up! A Few Important Things">
          <div className="bg-red-800 bg-opacity-30 border border-red-700 p-6 rounded-lg shadow-lg text-red-300">
            <div className="flex items-start">
                <ExclamationTriangleIcon className="w-8 h-8 text-red-400 mr-4 flex-shrink-0" />
                <div>
                    <h3 className="text-xl font-semibold text-red-200 mb-3">Be Smart & Safe!</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong className="text-red-200">Volatility:</strong> Like all cryptocurrencies, Monero's value can go up and down a LOT. It's risky, so never invest money you can't afford to lose.</li>
                        <li><strong className="text-red-200">Responsibility:</strong> Privacy is awesome, but it comes with responsibility. Use it wisely and ethically.</li>
                        <li><strong className="text-red-200">Security:</strong> Keeping your Monero safe is up to you. Learn about secure wallets and practices if you decide to use it.</li>
                        <li><strong className="text-red-200">Scams:</strong> The crypto world has its share of scams. Be super careful and always do your own research (DYOR!). If something sounds too good to be true, it probably is.</li>
                    </ul>
                </div>
            </div>
          </div>
        </Section>
        
        <Section title="🚀 Key Takeaways">
            <div className="bg-secondary-bg p-8 rounded-lg shadow-xl">
                <ul className="space-y-3 text-lg text-secondary-text">
                    <li className="flex items-center"><ScaleIcon className="w-6 h-6 text-accent-teal mr-3"/><span>Monero is like <strong className="text-primary-text">digital cash</strong> that's built for privacy.</span></li>
                    <li className="flex items-center"><EyeSlashIcon className="w-6 h-6 text-accent-orange mr-3"/><span>It uses cool tech like <strong className="text-primary-text">Ring Signatures, Stealth Addresses, and RingCT</strong> to hide who's sending, who's receiving, and how much.</span></li>
                    <li className="flex items-center"><UserGroupIcon className="w-6 h-6 text-accent-teal mr-3"/><span>This makes it very different from Bitcoin, where transactions are more public.</span></li>
                    <li className="flex items-center"><ExclamationTriangleIcon className="w-6 h-6 text-accent-orange mr-3"/><span>While private, remember cryptocurrencies are <strong className="text-primary-text">volatile and require responsible use</strong>.</span></li>
                </ul>
            </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
};

export default App;
